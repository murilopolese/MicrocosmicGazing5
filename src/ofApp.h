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
    int cv_invert = 1;
    int cv_threshold = 110;
    int cv_tracker_age_min = 1;
    int cv_tracker_age_max = -1;
    int cv_area_radius_min = 1;
    int cv_area_radius_max = 255;
    int cv_tracker_persistence = 15;
    int cv_tracker_distance_max = 32;

    int selected_label = -1;

    int cv_r = 255;
    int cv_g = 255;
    int cv_b = 255;
    int cv_a = 0;
    int cv_blobs = 0;
    int cv_all_blobs = 0;
    int cv_rectangles = 0;
    int cv_rectangle_fill = 0;
    int cv_velocity = 0;
    float cv_velocity_scale = 1.0;
    int cv_autoselect = 1;

    int zoom_r = 255;
    int zoom_g = 255;
    int zoom_b = 255;
    int zoom_a = 255;

    int image_r = 255;
    int image_g = 255;
    int image_b = 255;
    int image_a = 255;
};
