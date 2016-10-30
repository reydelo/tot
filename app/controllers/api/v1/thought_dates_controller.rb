class Api::V1::ThoughtDatesController < Api::V1::BaseController
  def index
    respond_with ThoughtDate.all
  end

  def create
    respond_with :api, :v1, ThoughtDate.create(thought_date_params)
  end

  def destroy
    respond_with ThoughtDate.destroy(params[:id])
  end

  def update
    thought_date = ThoughtDate.find(params[:id])
    thought_date.update_attributes(thought_date_params)
    respond_with thought_date, json: thought_date
  end

  private

  def thought_date_params
    params.require(:thought_date).permit(:name, :event_date)
  end
end
