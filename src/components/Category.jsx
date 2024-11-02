import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Category = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="font-bold text-3xl mt-10 text-center">Browse Coffees by Category</h2>
      <p className="text-center pb-4">
        Choose your desired coffee category to browse through specific coffees
        that fit in your taste.
      </p>
      <div className="">
        <Tabs>
          <TabList className="flex justify-between border-b">
            <Tab>Brewed Coffee</Tab>
            <Tab>Lced Coffee</Tab>
            <Tab>Dessert Coffee</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Category;
