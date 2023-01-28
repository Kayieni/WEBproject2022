from datetime import datetime, timedelta
import random


def create_date_list(num_days):
    date_data = []
    for i in range(num_days):
        date = datetime.today() + timedelta(days=i)
        date_data.append(date.strftime('%Y-%m-%d'))
    return date_data

date_data = create_date_list(6)
print(date_data)





def create_price_list(price_range, deviation, num_same_as_original):
  original_price = round(random.uniform(price_range[0], price_range[1]), 2)
  price_list = []
  while len(price_list) < 5:
    if len(price_list) < num_same_as_original:
      price_list.append(float("{:.2f}".format(original_price)))
    else:
      price = original_price + (random.random() * deviation * 2 - deviation)
      # Ensure the price is positive and not zero
      if price <= 0:
        price = original_price
      # Round the price to 2 decimal places
      price = round(price, 2)
      price_list.append(float("{:.2f}".format(price)))
  random.shuffle(price_list)
  return price_list

price_range = [2, 8]
deviation = 0.4
num_same_as_original = 2
price_data = create_price_list(price_range, deviation, num_same_as_original)
print(price_data)







