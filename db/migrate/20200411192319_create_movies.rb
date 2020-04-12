class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string   :name
      t.string   :description
      t.string   :image_url
      t.datetime :start_function
      t.datetime :end_function

      t.timestamps
    end
  end
end
