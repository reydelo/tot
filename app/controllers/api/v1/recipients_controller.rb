class Api::V1::RecipientsController < Api::V1::BaseController
  def index
    respond_with current_user.recipients
  end

  def update
    @recipient = current_user.recipients.where(id: params[:id]).first
    @recipient.update_attributes(recipient_params)
    respond_with @recipient, json: @recipient
  end

  def create
    @recipient = current_user.recipients.build(recipient_params)
    if @recipient.save
      render json: @recipient
    else
      render json: @recipient.errors, status: unprocessable_entity
    end
  end

  def destroy
    @recipient = Recipient.find(params[:id])
    @recipient.destroy if @recipient.user_id == current_user.id
    head :no_content
  end

  private
  def recipient_params
    params.require(:recipient).permit(:first_name, :last_name, :address, :city, :state, :zip_code, :relationship)
  end

end
