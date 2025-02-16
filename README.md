# Microcosmic Gazing 5

This repository is an OpenFrameworks project (of_v0.12.0_linux64gcc6_release).

It depends on the following libraries:

- ofxOpenCv
- ofxCv
- ofxGui
- ofxOsc

## Video

It will try to open a video file called `movie.mp4` that should have 1280x720 pixels.

The video file should be on `./bin/data/video.mp4`.

## Open Sound Control (OSC)

This project contains an OSC receiver and an OSC sender.

### OSC Receiver

Listening on port `12345`, this receiver will accept the following messages:

- `/cv_invert boolean`
- `/cv_area_radius_min integer`
- `/cv_area_radius_max integer`
- `/cv_threshold integer`
- `/cv_tracker_age_min integer`
- `/cv_tracker_age_max integer`
- `/cv_tracker_persistence integer`
- `/cv_tracker_distance_max integer`
- `/sender_location string`
- `/sender_port integer`

#### oscsender

Using the program `oscsender` you can change the computer vision threshold with:

```
oscsend localhost 12345 /cv_threshold i 110
```

#### PureData / PlugData

Inside the folder `puredata` there is a `.pd` file created with PlugData that controls all computer vision parameters over OSC with sliders.

### OSC Sender

There is code for two types of sender available. They both send messages to port `12346`.

#### Data Frame

Once data is acquired by computer vision, it's encoded and sent over as a single message on the address `/data_frame`.

The first argument on the message is the amount of blobs found by the contour finder.

The following values are `label`, `age`, `contourArea`, `center.x`, `center.y`, `velocity.x` and `velocity.y` for each blob found.

#### GLSL Viewer

To help creating shaders, there is also a sender that sets the uniforms with the blob positions on a glsls shader.

This is a proof of concept on how to create shaders from the blob characteristics.

On the folder `glslviewer` you can find a python script called `cheat.py` that generates a glsl fragment shader with N preallocated positions.
