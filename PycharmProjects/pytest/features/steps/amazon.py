
import pytest

from pytest_bdd import scenarios, given, when, then, parsers
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

# Constants

AMAZON_HOME = 'https://www.amazon.in/'

# Scenarios

scenarios('../amazonfind.feature')


# Fixtures

@pytest.fixture
def browser():
    b = webdriver.Chrome(executable_path="D://chromedriver")
    b.implicitly_wait(10)
    yield b
    b.quit()


# Given Steps

@given('the Amazon home page is displayed')
def ddg_home(browser):
    browser.get(AMAZON_HOME)


# When Steps

@when(parsers.parse('the user searches for "{phrase}"'))
def search_phrase(browser, phrase):
    search_input = browser.find_element_by_id('twotabsearchtextbox')
    search_input.send_keys(phrase)
    search = browser.find_element_by_id('nav-search-submit-button')
    search.click()


# Then Steps

@then(parsers.parse('results are shown for "{phrase}"'))
def search_results(browser, phrase):

    search_input = browser.find_element_by_id('twotabsearchtextbox')
    assert search_input.get_attribute('value') == phrase
