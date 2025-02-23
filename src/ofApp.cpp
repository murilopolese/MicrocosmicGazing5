#include "ofApp.h"

using namespace ofxCv;
using namespace cv;


void ofApp::drawCube(int x1, int y1, int w1, int h1, int x2, int y2, int w2, int h2) {
  ofDrawRectangle(x1, y1, w1, h1);
  ofDrawLine(x1, y1, x2, y2);
  ofDrawLine(x1+w1, y1, x2+w2, y2);
  ofDrawLine(x1, y1+h1, x2, y2+h2);
  ofDrawLine(x1+w1, y1+h1, x2+w2, y2+h2);
  ofDrawRectangle(x2, y2, w2, h2);
}

int ofApp::getIndex(int label) {
  int index = -1;
  for (int i = 0; i < contourFinder.size(); i++) {
    int label = contourFinder.getLabel(i);
    if (label == last_label) {
      index = i;
    }
  }
  return index;
}

void ofApp::setup() {
  ofSetVerticalSync(true);
  ofBackground(0);

  movies[0].load("video0.mp4");
  movies[1].load("video1.mp4");
  movies[2].load("video2.mp4");
  movies[3].load("video3.mp4");
  movies[4].load("video4.mp4");
  movies[0].play();
  movies[1].play();
  movies[2].play();
  movies[3].play();
  movies[4].play();

  cv_area_radius_min = 1;
  cv_area_radius_max = 100;
  cv_threshold = 110;
  cv_tracker_age_min = 0;
  cv_tracker_age_max = -1;
  cv_tracker_persistence = 15;
  cv_tracker_distance_max = 32;

  contourFinder.setInvert(true);

  receiver.setup(PORT);
  sender.setup("localhost", PORT+1);
}

void ofApp::update() {
  movies[selected_video].update();
  if(movies[selected_video].isFrameNew()) {
    contourFinder.setInvert(cv_invert);
    contourFinder.setMinAreaRadius(cv_area_radius_min);
    contourFinder.setMaxAreaRadius(cv_area_radius_max);
    contourFinder.setThreshold(cv_threshold);
    contourFinder.getTracker().setPersistence(cv_tracker_persistence);
    contourFinder.getTracker().setMaximumDistance(cv_tracker_distance_max);
    contourFinder.findContours(movies[selected_video]);
  }
  while(receiver.hasWaitingMessages()) {
    ofxOscMessage m;
    receiver.getNextMessage(m);
    // check for mouse moved message
    string addr = m.getAddress();
    if (addr == "/selected_video") {
      selected_video = m.getArgAsInt(0) % 5;
    }
    if (addr == "/cv_area_radius_min") {
      cv_area_radius_min = m.getArgAsInt(0);
    }
    if (addr == "/cv_area_radius_max") {
      cv_area_radius_max = m.getArgAsInt(0);
    }
    if (addr == "/cv_threshold") {
      cv_threshold = m.getArgAsInt(0);
    }
    if (addr == "/cv_tracker_age_min") {
      cv_tracker_age_min = m.getArgAsInt(0);
    }
    if (addr == "/cv_tracker_age_max") {
      cv_tracker_age_max = m.getArgAsInt(0);
    }
    if (addr == "/cv_tracker_persistence") {
      cv_tracker_persistence = m.getArgAsInt(0);
    }
    if (addr == "/cv_tracker_distance_max") {
      cv_tracker_distance_max = m.getArgAsInt(0);
    }
    if (addr == "/cv_r") {
      cv_r = m.getArgAsInt(0);
    }
    if (addr == "/cv_g") {
      cv_g = m.getArgAsInt(0);
    }
    if (addr == "/cv_b") {
      cv_b = m.getArgAsInt(0);
    }
    if (addr == "/cv_a") {
      cv_a = m.getArgAsFloat(0);
    }
    if (addr == "/cv_blobs") {
      cv_blobs = m.getArgAsInt(0); // 0 or 1 for drawing blob convex hull
    }
    if (addr == "/cv_rectangles") {
      cv_rectangles = m.getArgAsInt(0); // 0 or 1 for drawing blob bounding rectangles
    }
    if (addr == "/zoom_r") {
      zoom_r = m.getArgAsInt(0);
    }
    if (addr == "/zoom_g") {
      zoom_g = m.getArgAsInt(0);
    }
    if (addr == "/zoom_b") {
      zoom_b = m.getArgAsInt(0);
    }
    if (addr == "/zoom_a") {
      zoom_a = m.getArgAsFloat(0);
    }
    if (addr == "/image_r") {
      image_r = m.getArgAsInt(0);
    }
    if (addr == "/image_g") {
      image_g = m.getArgAsInt(0);
    }
    if (addr == "/image_b") {
      image_b = m.getArgAsInt(0);
    }
    if (addr == "/image_a") {
      image_a = m.getArgAsFloat(0);
    }
  }

  RectTracker& tracker = contourFinder.getTracker();
  bool last_label_changed = false;
  if (last_label == -1) {
    int selected = int( ofRandom( 0, contourFinder.size() ) );
    int label = contourFinder.getLabel(selected);
    int age = tracker.getAge(label);
    if (age > cv_tracker_age_min && (cv_tracker_age_max < 0 || age < cv_tracker_age_max)) {
      last_label = label;
      last_label_changed = true;
    } else {
      last_label = -1;
    }
  } else {
    bool exists = false;
    for(int i = 0; i < contourFinder.size(); i++) {
      int label = contourFinder.getLabel(i);
      if (label == last_label) {
        exists = true;
      }
    }
    if (exists) {
      int age = tracker.getAge(last_label);
      if (age > cv_tracker_age_min && (cv_tracker_age_max < 0 || age < cv_tracker_age_max)) {
        // last_label = label;
      } else {
        last_label = -1;
      }
    } else {
      int selected = int( ofRandom( 0, contourFinder.size() ) );
      int label = contourFinder.getLabel(selected);
      last_label = label;
      last_label_changed = true;
    }
  }

  if (last_label_changed) {
    ofxOscMessage m;
    m.setAddress("/label_changed");
    sender.sendMessage(m, false);
  }
  if (last_label != -1) {
    int index = getIndex(last_label);
    if (index != -1) {
      ofPoint center = toOf(contourFinder.getCenter(index));
      ofVec2f velocity = toOf(contourFinder.getVelocity(index));
      ofxOscMessage m;
      m.setAddress("/last_label");
      m.addIntArg(last_label);
      m.addIntArg(center.x);
      m.addIntArg(center.y);
      m.addIntArg(velocity.x);
      m.addIntArg(velocity.y);
      sender.sendMessage(m, false);
    }
  }
}


void ofApp::draw() {
  RectTracker& tracker = contourFinder.getTracker();
  ofSetColor(image_r, image_g, image_b, image_a);
  ofVideoPlayer movie = movies[selected_video];
  movie.draw(0, 0);

  ofSetColor(cv_r, cv_g, cv_b, cv_a);
  contourFinder.draw();

  if (last_label != -1) {
    int margin = 100;
    int crop_size = 100;
    int amp_size = 400;

    int label = last_label;
    int age = tracker.getAge(label);

    int index = getIndex(label);

    if (index != -1) {
      ofPoint center = toOf(contourFinder.getCenter(index));
      ofPolyline convexHull = toOf(contourFinder.getConvexHull(index));
      ofSetLineWidth(1);
    	convexHull.draw();

      if (center.x > (crop_size/2) && center.x < 1280-(crop_size/2) && center.y > (crop_size/2) && center.y < 720-(crop_size/2)) {
        ofSetColor(zoom_r, zoom_g, zoom_b, zoom_a);
        ofSetLineWidth(1);
        ofNoFill();
        ofDrawRectangle(center.x-(crop_size/2), center.y-(crop_size/2), crop_size, crop_size);
        ofImage img;
        img.setFromPixels(movie.getPixels());
        ofPushMatrix();
        if (center.x > movie.getWidth()/2) {
          if (center.y > movie.getHeight()/2) {
            drawCube(center.x-(crop_size/2), center.y-(crop_size/2), crop_size, crop_size, margin, margin, amp_size, amp_size);
            img.drawSubsection(margin, margin, amp_size, amp_size, center.x-(crop_size/2), center.y-(crop_size/2), crop_size, crop_size);
            ofDrawRectangle(margin, margin, amp_size, amp_size);
          } else {
            drawCube(center.x-(crop_size/2), center.y-(crop_size/2), crop_size, crop_size, margin, movie.getHeight()-margin-amp_size, amp_size, amp_size);
            img.drawSubsection(margin, movie.getHeight()-margin-amp_size, amp_size, amp_size, center.x-(crop_size/2), center.y-(crop_size/2), crop_size, crop_size);
            ofDrawRectangle(margin, movie.getHeight()-margin-amp_size, amp_size, amp_size);
          }
        } else {
          if (center.y > movie.getHeight()/2) {
            drawCube(center.x-(crop_size/2), center.y-(crop_size/2), crop_size, crop_size, movie.getWidth()-margin-amp_size, margin, amp_size, amp_size);
            img.drawSubsection(movie.getWidth()-margin-amp_size, margin, amp_size, amp_size, center.x-(crop_size/2), center.y-(crop_size/2), crop_size, crop_size);
            ofDrawRectangle(movie.getWidth()-margin-amp_size, margin, amp_size, amp_size);
          } else {
            drawCube(center.x-(crop_size/2), center.y-(crop_size/2), crop_size, crop_size, movie.getWidth()-margin-amp_size, movie.getHeight()-margin-amp_size, amp_size, amp_size);
            img.drawSubsection(movie.getWidth()-margin-amp_size, movie.getHeight()-margin-amp_size, amp_size, amp_size, center.x-(crop_size/2), center.y-(crop_size/2), crop_size, crop_size);
            ofDrawRectangle(movie.getWidth()-margin-amp_size, movie.getHeight()-margin-amp_size, amp_size, amp_size);
          }
        }
        ofPopMatrix();
      }
    }

  }



  // for(int i = 0; i < contourFinder.size(); i++) {
  //   ofSetColor(255);
  //   int label = contourFinder.getLabel(i);
  //   int age = tracker.getAge(label);
  //   if (age > cv_tracker_age_min && (cv_tracker_age_max < 0 || age < cv_tracker_age_max)) {
	// 		ofPoint center = toOf(contourFinder.getCenter(i));
  //     ofPolyline convexHull = toOf(contourFinder.getConvexHull(i));
  // 		convexHull.draw();
	// 		ofPushMatrix();
	// 		ofTranslate(center.x, center.y);
  //     ofVec2f velocity = toOf(contourFinder.getVelocity(i));
  //     string msg = ofToString(label) + ":" + ofToString(tracker.getAge(label));
  //     // ofDrawBitmapString(msg, 0, 0);
  //   }
  //   ofPopMatrix();
  // }
}

void ofApp::keyPressed(int key) {

}
