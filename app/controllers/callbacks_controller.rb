class CallbacksController < Devise::OmniauthCallbacksController

  def facebook
    if request.env["omniauth.auth"].info.email.blank?
      flash[:notice] = "No Email from Facebook"
      redirect_to new_user_registration_url
    else
      @user = User.from_omniauth(request.env["omniauth.auth"])
      sign_in_and_redirect @user
    end
  end

end
