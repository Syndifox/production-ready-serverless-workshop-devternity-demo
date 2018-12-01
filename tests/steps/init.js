let initialized = false

const init = async () => {
  if (initialized) {
    return
  }

  process.env.restaurants_api   = "https://ilza8tk6h9.execute-api.eu-west-1.amazonaws.com/dev/restaurants"
  process.env.restaurants_table = "workshop-syndifox"
  process.env.AWS_REGION        = "eu-west-1"
  process.env.order_events_stream = 'orders-dev-syndifox'
  process.env.restaurant_notification_topic = 'restaurants-dev-syndifox'
  process.env.TEST_ROOT = "https://ilza8tk6h9.execute-api.eu-west-1.amazonaws.com/dev"
  
  initialized = true
}

module.exports = {
  init
}