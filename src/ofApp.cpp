#include "ofApp.h"

using namespace ofxCv;
using namespace cv;

void ofApp::setup() {
  ofSetVerticalSync(true);
  ofBackground(0);

  // movie.load("video.mov");
  movie.load("video.mp4");
  movie.play();

  contourFinder.setInvert(true);

  cv_area_radius_min = 1;
  cv_area_radius_max = 100;
  cv_threshold = 110;
  cv_tracker_age_min = 0;
  cv_tracker_age_max = -1;
  cv_tracker_persistence = 15;
  cv_tracker_distance_max = 32;

  receiver.setup(PORT);
}

void ofApp::update() {
  movie.update();
  if(movie.isFrameNew()) {
    blur(movie, 10);
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
  			ofPushMatrix();
  			ofTranslate(center.x, center.y);
        ofVec2f velocity = toOf(contourFinder.getVelocity(i));
        if (velocity.length() < 5) {
          ofScale(5, 5);
          string msg = ofToString(label) + ":" + ofToString(tracker.getAge(label));
          ofDrawBitmapString(msg, 0, 0);
        }
      }
      ofPopMatrix();
  }
}

void ofApp::keyPressed(int key) {

}
