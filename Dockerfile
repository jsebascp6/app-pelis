FROM ruby:2.6.5

WORKDIR /app-pelis
ADD Gemfile Gemfile.lock /app-pelis/
RUN bundle install --path vendor/cache

RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_9.x  | bash -
RUN apt-get -y install nodejs

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y yarn
RUN apt-get install -y nodejs postgresql-client
ENV BUNDLE_PATH /app-pelis/.gems
ENV GEM_HOME /app-pelis/.gems
