

import time

from selenium import webdriver
from selenium.webdriver import Keys

driver = webdriver.Chrome("D://chromedriver.exe")
driver.maximize_window()
driver.get("https://www.myntra.com/")
driver.find_element_by_xpath("/html/body/div[1]/div/div/header/div[2]/div[3]/input").send_keys("crop top")
time.sleep(3)
#click on the Google search button
driver.find_element_by_xpath("/html/body/div[1]/div/div/header/div[2]/div[3]/a/span").click()
time.sleep(3)
#close the browser
driver.close()
print("sample test case successfully completed")