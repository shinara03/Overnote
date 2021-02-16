class Api::NotesController < ApplicationController

  def index 
    @notes = current_user.notes
    render 'api/notes/index'
  end

  def show
    @note = current_user.notes.find_by(id: params[:id])
    if @note 
      render 'api/notes/show'
    else
      render json: ["Note deos not exist"], status: 400
    end
  end

  def create
    @note = Note.new(note_params)
    if @note.save
      render 'api/notes/show'
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update 
    @note = current_user.notes.find_by(id: params[:id])
    if @note.update(note_params)
      render 'api/notes/show'
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = current_user.notes.find_by(id: params[:id]) 
    if @note
      @note.destroy
      render 'api/notes/show'
    else
      render json: ["Note does not exist"], status: 400
    end
  end

  private
  def note_params
    params.require(:note).permit(:title, :body, :notebook_id)
  end
end