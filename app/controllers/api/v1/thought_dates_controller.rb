class Api::V1::ThoughtDatesController < Api::V1::BaseController
  def index
    if params[:recipient_id]
      recipient = Recipient.where(user_id: current_user.id, id: params[:recipient_id]).first
      thought_dates = ThoughtDate.where(recipient_id: recipient.id).includes(:recipient).as_json(include: { recipient: { only: [:first_name, :last_name]}}) if recipient.present?
      respond_with thought_dates
    else
      recipients = Recipient.where(user_id: current_user.id).includes(:thought_dates)
      thought_dates = []
      recipients.each do |recip|
        recip.thought_dates.each do |thought_date|
          td = ThoughtDate.where(id: thought_date.id).includes(:recipient).as_json(include: { recipient: { only: [:first_name, :last_name]}})
          thought_dates << td if thought_date.event_date.present?
        end
      end
      thought_dates = thought_dates.flatten
      respond_with thought_dates
    end
  end

  def show
    respond_with ThoughtDate.where(id: params[:id]).includes(:recipient).as_json(include: { recipient: { only: [:first_name, :last_name]}})
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
    params.require(:thought_date).permit(:name, :event_date, :recipient_id)
  end
end
