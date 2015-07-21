require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

  test "should get exercises" do
    get :exercises
    assert_response :success
  end

  test "should get videos" do
    get :videos
    assert_response :success
  end

end
