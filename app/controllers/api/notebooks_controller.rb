class Api::NotebooksController < ApplicationController
  def index
    @notebooks = current_user.notebooks
    render 'api/notebooks/index'
  end

  def create
    @notebook = Notebook.new(notebook_params)
    if @notebook.save
      render 'api/notebooks/show'
    else 
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def update
    @notebook = current_user.notebooks.find_by(id: params[:id])
    if @notebook.update(notebook_params)
      render 'api/notebooks/show'
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def destroy
    @notebook = current_user.notebooks.find_by(id: params[:id])
    @notebook.destroy

    render json: @notebook.id
  end

  def show
    @notebook = current_user.notebooks.find_by(id: params[:id])
    if @notebook
      render 'api/notebooks/show'
    else
      render json: ["Notebook does not exist"], status: 401
    end
  end

  private 
  def notebook_params 
    params.require(:notebook).permit(:notebook_name, :author_id)
  end
end
