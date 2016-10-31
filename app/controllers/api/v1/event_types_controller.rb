class Api::V1::EventTypesController < Api::V1::BaseController
  def index
    respond_with EventType.all_names
  end
end
