import cfscrape

scraper = cfscrape.create_scraper() 
print(scraper.get("https://keywordtool.io/search/keywords/google/1#suggestions").content)