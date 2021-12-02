


from selenium import webdriver
import time

from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
print("sample test case started")
driver = webdriver.Chrome("D://chromedriver.exe")
#driver=webdriver.firefox()
#driver=webdriver.ie()
#maximize the window size
driver.maximize_window()
#delete the cookies
driver.delete_all_cookies()
#navigate to the url
driver.get("https://www.flipkart.com/")
driver.find_element_by_xpath("/html/body/div[2]/div/div/button").click()
driver.find_element_by_name("q").send_keys("watches")
time.sleep(1)
driver.find_element_by_class_name("_34RNph").click()
time.sleep(1)
driver.find_element_by_xpath("//*[@id='container']/div/div[3]/div[1]/div[2]/div[2]/div/div[1]/div/a[2]").click()
time.sleep(2)
driver.find_element_by_xpath("//*[@id='container']/div/div[3]/div[1]/div[1]/div[2]/div/ul/li[1]/button").click()
time.sleep(2)
driver.find_element_by_id("_3SkBxJ").click()
time.sleep(2)
driver.close()
print("successfully completed")