class V1::ThingsController < ApplicationController
  def index
    render json: { :things => [
      {
        :name => 'som-thing',
        :guid => 'test'
      }
    ] }.to_json
  end
end
