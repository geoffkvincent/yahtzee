20.times do
  user = User.create(
    email: Faker::Internet.unique.email,
    password: 'passwoed'
  )

  5.times do
    Score.create(
    
  )