
import time

from behave import *
from selenium import webdriver

@given('chrome is launched')
def launchbrowser(context):
   context.driver=webdriver.Chrome(executable_path="D:/chromedriver")
   context.driver.get("http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx")

@when('we enter username  password')
def clickcheckbox(context):
    context.driver.find_element_by_id('ctl00_MainContent_username').send_keys("Tester")
    context.driver.find_element_by_id("ctl00_MainContent_password").send_keys("test")

@then('we login')
def clickadd(context):
    context.driver.find_element_by_id('ctl00_MainContent_login_button').click()

@then('we select view all orders')
def clickaddorder(context):
    context.driver.find_element_by_link_text('View all orders').click()

@then('we select view all products')
def clickaddproducts(context):
    context.driver.find_element_by_link_text('View all products').click()

@then('we select order')
def clickaddor(context):
    context.driver.find_element_by_link_text('Order').click()

