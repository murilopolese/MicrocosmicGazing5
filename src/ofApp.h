#pragma once

#include "ofMain.h"
#include "ofxCv.h"
#include "ofxOsc.h"
#define PORT 12345

class ofApp : public ofBaseApp{

	public:
		void setup();
		void update();
		void draw();
		void keyPressed(int key);

		ofVideoPlayer movie;
		ofxCv::ContourFinder contourFinder;

    ofxOscReceiver receiver;
    int cv_threshold;
    int cv_tracker_age_min;
    int cv_tracker_age_max;
    int cv_area_radius_min;
    int cv_area_radius_max;
    int cv_tracker_persistence;
    int cv_tracker_distance_max;


};
