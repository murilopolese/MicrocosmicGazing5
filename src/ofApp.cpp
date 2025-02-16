#include "ofApp.h"

using namespace ofxCv;
using namespace cv;

void ofApp::setup() {
  ofSetVerticalSync(true);
  ofBackground(0);

  // movie.load("video.mov");
  movie.load("video.mp4");
  movie.play();

  cv_invert = 1;
  cv_area_radius_min = 1;
  cv_area_radius_max = 100;
  cv_threshold = 110;
  cv_tracker_age_min = 0;
  cv_tracker_age_max = -1;
  cv_tracker_persistence = 15;
  cv_tracker_distance_max = 32;

  contourFinder.setInvert(cv_invert);

  receiver.setup(PORT);
}

void ofApp::update() {
  movie.update();
  if(movie.isFrameNew()) {
    contourFinder.setInvert(cv_invert);
    contourFinder.setMinAreaRadius(cv_area_radius_min);
    contourFinder.setMaxAreaRadius(cv_area_radius_max);
    contourFinder.setThreshold(cv_threshold);
    contourFinder.getTracker().setPersistence(cv_tracker_persistence);
    contourFinder.getTracker().setMaximumDistance(cv_tracker_distance_max);
    contourFinder.findContours(movie);
  }
  while(receiver.hasWaitingMessages()) {
    ofxOscMessage m;
    receiver.getNextMessage(m);
    // check for mouse moved message
    string addr = m.getAddress();
    if (addr == "/sender_location") {
      sender_address = m.getArgAsString(0);
    }
    if (addr == "/sender_port") {
      sender_port = m.getArgAsInt(0);
    }
    if (addr == "/cv_invert") {
      cv_invert = m.getArgAsInt(0);
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
  }

  RectTracker& tracker = contourFinder.getTracker();
  sender.setup(sender_address, sender_port);

  ofxOscMessage m;
	m.setAddress("/data_frame");
  m.addIntArg(contourFinder.size());
  for(int i = 0; i < contourFinder.size(); i++) {
    ofSetColor(255);
    int label = contourFinder.getLabel(i);
    int age = tracker.getAge(label);
    int size = contourFinder.getContourArea(i);
    if (age > cv_tracker_age_min && (cv_tracker_age_max < 0 || age < cv_tracker_age_max)) {
			ofPoint center = toOf(contourFinder.getCenter(i));
      ofVec2f velocity = toOf(contourFinder.getVelocity(i));
      m.addIntArg(label);
      m.addIntArg(age);
      m.addIntArg(size);
      m.addIntArg(int(center.x));
      m.addIntArg(int(center.y));
      m.addIntArg(int(velocity.x));
      m.addIntArg(int(velocity.y));
    }
  }
	sender.sendMessage(m, false);

  for(int i = 0; i < contourFinder.size(); i++) {
    ofxOscMessage n; // glslViewer suggar
    ofPoint center = toOf(contourFinder.getCenter(i));
    int size = contourFinder.getContourArea(i);
    int label = contourFinder.getLabel(i);
    int age = tracker.getAge(label);
    if (age > cv_tracker_age_min && (cv_tracker_age_max < 0 || age < cv_tracker_age_max)) {
      n.setAddress("/u_pos_" + ofToString(i));
      n.addIntArg(center.x);
      n.addIntArg(center.y);
      n.addIntArg(size);
      sender.sendMessage(n);
      ofLog() << "n " << n;
    }
  }

}

void ofApp::draw() {
  RectTracker& tracker = contourFinder.getTracker();
  ofSetColor(255);
  movie.draw(0, 0);
  // contourFinder.draw();
  for(int i = 0; i < contourFinder.size(); i++) {
    ofSetColor(255);
    int label = contourFinder.getLabel(i);
    int age = tracker.getAge(label);
    if (age > cv_tracker_age_min && (cv_tracker_age_max < 0 || age < cv_tracker_age_max)) {
			ofPoint center = toOf(contourFinder.getCenter(i));
      ofPolyline convexHull = toOf(contourFinder.getConvexHull(i));
  		convexHull.draw();
      // ofPolyline minAreaRect = toOf(contourFinder.getMinAreaRect(i));
  		// minAreaRect.draw();
      // ofRectangle boundingBox = minAreaRect.getBoundingBox();
      // ofDrawRectangle(boundingBox);
			ofPushMatrix();
			ofTranslate(center.x, center.y);
      ofVec2f velocity = toOf(contourFinder.getVelocity(i));
      string msg = ofToString(label) + ":" + ofToString(tracker.getAge(label));
      ofDrawBitmapString(msg, 0, 0);
    }
    ofPopMatrix();
  }
}

void ofApp::keyPressed(int key) {

}
