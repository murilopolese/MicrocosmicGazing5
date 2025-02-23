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
    void drawCube(int x1, int y1, int w1, int h1, int x2, int y2, int w2, int h2);
    int getIndex(int label);

    int selected_video = 0;
    ofVideoPlayer movies[5];
		ofxCv::ContourFinder contourFinder;

    ofxOscReceiver receiver;
    ofxOscSender sender;
    int cv_invert;
    int cv_threshold;
    int cv_tracker_age_min;
    int cv_tracker_age_max;
    int cv_area_radius_min;
    int cv_area_radius_max;
    int cv_tracker_persistence;
    int cv_tracker_distance_max;

    int last_label = -1;

    int cv_r = 255;
    int cv_g = 255;
    int cv_b = 255;
    int cv_a = 255;
    int cv_blobs = 1;
    int cv_rectangles = 1;

    int zoom_r = 255;
    int zoom_g = 255;
    int zoom_b = 255;
    int zoom_a = 255;

    int image_r = 255;
    int image_g = 255;
    int image_b = 255;
    int image_a = 255;
};
