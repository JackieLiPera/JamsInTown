class Api::CommentsController < ApplicationController
  before_action :require_logged_in

  def create
    @comment = @current_user.comments.new(comment_params)

    if @comment.save
      render json: @comment
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    render json: { commentId: comment.id }
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :user_id, :artist_id)
  end
end
