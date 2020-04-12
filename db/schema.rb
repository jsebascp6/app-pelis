# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_11_192346) do

  create_table "bookings", force: :cascade do |t|
    t.string "identification_card"
    t.string "name"
    t.string "email"
    t.string "phone"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "movie_id"
    t.index ["movie_id"], name: "index_bookings_on_movie_id"
  end

  create_table "movies", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "image_url"
    t.datetime "start_function"
    t.datetime "end_function"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "bookings", "movies"
end
