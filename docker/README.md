Dockerized environment for website builds
=========================================

The Dockerfile in this repository allows you to build a reusable Docker image in which you can play around with the website and once satisfied, make commits.
This removes the need to have Ruby and all its gems installed locally, all that's needed is working Docker.
The resulting image is not meant to be published as it's tailored to whoever built it.
Once built, you can reuse the same container over and over without the need to re-build it.


Workflow
--------

Here is the general idea of how this works:

* Build the Docker container once
* Run the container every time you want to make some website changes
* Perform any changes you wish to inside the repository
  * You will want to be in the `devel` branch for that
* You can deploy website and check it in your browser
  * Website deployment is done via `awestruct -d`
  * The website is deployed at `localhost:4242`
* Make commit to the `devel` branch once satisfied
* Perform deployment command - `rm -rf _site && awestruct -P production && awestruct -P production --deploy`
  * This step switches to `master` and performs commit with all the needed changes
  * It will attempt to proceed with push, but will fail since you have no credentials in container, this is expected
* Close the container and from your local machine push both, `devel` and `master` branches
* Enjoy updated website live

How to build
------------

To build the image, make sure you are in the directory with the Dockerfile and run

> docker build --tag=weld-deps-container --build-arg GIT_NAME="Average Joe" --build-arg GIT_MAIL="average@joe.com" --build-arg USER_NAME=$(whoami) --build-arg USER_ID=$UID .

Now, what does that command mean:
* `--tag` is just the name you give to your image, you will need to know this name later on in order to run the container
* `--build-arg` those are all arguments that the container takes during build, make sure you specify all of them so that the container works correctly
  * `GIT_MAIL` and `GIT_NAME` are your Git email and name that you want to have displayed along with any commits you make
    * Required in order to be able to perform commits inside container without the need to set credentials after each login
* `USER_NAME` is the result of `whoami` command; simply a currently logged-in user
* `USER_ID` is the ID of currently logged-in user; obtainable via environment variable `$UID`
  * These are required in order to perform file system changes on mounted volume without messing with permissions


How to run the container
------------------------

Assuming you built the container, you now have an environment with all the dependencies and which knows your user and Git information for commits.
Here is how you run it:

> docker run -v /home/your/path/to/weld.github.io/:/home/$(whoami)/weld.github.io -p 4242:4242 -it weld-deps-container

Again, let's look at what it really does:

* `-it` means you will run in interactive mode; that means landing in terminal under the same user you are now (which we have added to Docker during build)
* `-v /what:/where` is an argument meaning you want to mount something from your local filesystem under certain path in Docker container
  * Here, we want to mount website GitHub repository under the `/home` of the added user
* `-p 4242:4242` this is port mapping, it says that port 4242 within the container should be exposed at port 4242 on your local machine
  * Thanks to this bit, we can deploy from container and view from browser


If, for some reason, you need to get into the container as `root` user, add the following bit into the previous command

> -u root

