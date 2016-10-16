class RecipientsController < ApplicationController
  before_action :authenticate_user!

  def index
    @recipients = Recipient.all
  end

  def create
    @recipient = Recipient.new(recipient_params)

    if @recipient.save
      render json: @recipient
    else
      render json: @recipient.errors, status: unprocessable_entity
    end
  end

  def update
    @recipient = Recipient.find(params[:id])
     if @recipient.update(recipient_params)
       render json: @recipient
     else
       render json: @recipient.errors, status: unprocessable_entity
     end
  end

  def destroy
    @recipient = Recipient.find(params[:id])
    @recipient.destroy
    head :no_content
  end

  private

  def recipient_params
    params.require(:recipient).permit(
      :first_name, :last_name, :relationship,
      :address, :city, :state, :zip_code, :user_id
    )
  end


end
