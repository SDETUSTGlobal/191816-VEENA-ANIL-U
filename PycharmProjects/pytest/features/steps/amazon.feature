Feature: Amazon Product Browsing
  As a online buyer,
  I want to find new products online,
  So I can try out new products.

  # The "@" annotations are tags
  # One feature can have multiple scenarios
  # The lines immediately after the feature title are just comments

  Scenario: Basic Amazon Product Search For Shoes
    Given the Amazon home page is displayed
    When the user searches for "Shoes"
    Then results are shown for "Shoes"