# BBDocs

## Disclaimer
This is *not* official documentation and is, in no way, supported or sponosed by Buildbox or 8Cell, Inc.

## Introduction
Buildbox 3 is a newly released (BETA) game-development program by 8Cell, Inc. It is the successor to the popular Buildbox program and adds many new features, most notably 3d support and custom scripting.

## Goal
The goal of this project is to attempt to discover more about the supoorted functions of Buildbox3's classes (The so-called API), by using basic instrospection in Javascript to determine available methods, input arguments and return values. This will hopefully allow developers to do more with their programs by understanding what is available to them ahead of Buildbox's official API documentation release.

*NOTE:* Again, this is not officially suported by Builbox or 8Cell. Some of these "APIs" may not be stable and could change or be removed without notice - as is the nature of beta software.

## How?
The various class interfaces that are available so far were discovered by adding a "Script" node to an object. Within the script node's `init` function, a simple property loop was done `for(var prop in this)` and each property was logged to the console `log("prop:" + prop)` (as of the time of writing this, the `log` method in buildbox only supports strings, so you must cocatenate the variable you're logging with a string) to determine the available methods. If a method returned an Object, the same process was used to determine that Object's type and available methods.

## What Now?
Once you're able to understand the available methods on the various Buildbox classes, you begin using them to add new functionality that might not be supported by existing presets. As an example, the Buildbox forum user *thatguyminib* posted in the Buildbox forums about how he was able to send signals from one Object to another.

https://www.buildbox.com/forum/index.php?threads/buildbox-3-javascript-tips.13337/

*NOTE:* thatguyminib is not associated with this project and discovered the ability to signal other objects through his own means. I just wanted to link to his discover as it further defines the usefulness of discovering an object's available methods.