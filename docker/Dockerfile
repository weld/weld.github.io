FROM ubuntu:18.10

MAINTAINER manovotn

#Image takes four different parameters; first two are name and email of the person who is to author git commits
#The other two are username and ID of user who will be consuming the image
ARG GIT_NAME
ARG GIT_MAIL
ARG USER_NAME
ARG USER_ID

RUN apt-get update; apt-get install -y \
    vim -y \
    wget -y

#get Maven
RUN apt-get install maven -y

#few things needed for manual Git installation
RUN apt-get install make autoconf libcurl4-gnutls-dev gettext gcc zlib1g-dev -y

#get Git from source in order to have older version
#we need something older than 2.16 due to Ruby git gem; 2.15.3 is the latest we can pick
RUN wget https://mirrors.edge.kernel.org/pub/software/scm/git/git-2.15.3.tar.gz -O git-2.15.3.tar.gz
RUN tar -zxvf git-2.15.3.tar.gz
RUN rm git-2.15.3.tar.gz
RUN cd git-2.15.3 && make configure && ./configure --prefix=/usr --without-tcltk && make all && make install

#get Ruby and ruby-dev
RUN apt-get install ruby -y
RUN apt-get install ruby-dev -y

#several other things needed for building ruby native extensions
RUN apt-get install libffi-dev -y
RUN apt-get install gcc -y
RUN apt-get install make -y
RUN apt-get install libxslt-dev -y
RUN apt-get install libxml2-dev -y
RUN apt-get install build-essential -y

#ruby gems, we want to be specific about these old versions
RUN gem install rake -v 12.3.1
RUN gem install bundler -v 1.16.1
RUN gem install asciidoctor -v 0.1.4
RUN gem install sass -v 3.2.19
RUN gem install bootstrap-sass -v 2.3.2.2
RUN gem install chunky_png -v 1.3.1
RUN gem install fssm -v 0.2.10
RUN gem install compass -v 0.12.7
RUN gem install compass-960-plugin -v 0.10.4
RUN gem install git -v 1.2.7
RUN gem install tilt -v 2.0.1
RUN gem install haml  -v 4.0.5
RUN gem install rb-fsevent -v 0.9.4
RUN gem install ffi  -v 1.9.3
RUN gem install rb-inotify -v 0.9.5
RUN gem install rb-kqueue -v 0.2.3
RUN gem install listen -v 1.3.1
RUN gem install nokogiri -v 1.5.10
RUN gem install rack -v 1.5.2
RUN gem install mime-types -v 2.3
RUN gem install netrc -v 0.7.7
RUN gem install rest-client -v 1.7.2
RUN gem install ruby-s3cmd -v 0.1.5
RUN gem install zurb-foundation -v 4.3.2
RUN gem install awestruct -v 0.5.3
RUN gem install uglifier -v 4.1.20
RUN gem install coffee-script -v 2.4.1
RUN gem install htmlcompressor -v 0.4.0

#expose port where app is deployed for viewing in browser on host machine
EXPOSE 4242

#adds you as user in order to allow file modifications on repo without permission issues
RUN useradd -m $USER_NAME -u $USER_ID --shell /bin/bash
USER $USER_NAME
WORKDIR /home/$USER_NAME
ENV HOME /home/$USER_NAME
ENV LANG en_US.UTF-8

#set the GH user and email and do so under correct system user
RUN git config --global user.email $GIT_MAIL
RUN git config --global user.name $GIT_NAME

# if you run this image in -it mode, then you get into bash as current user
CMD ["bash","--login"]
