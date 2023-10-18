"use client";
import React, { forwardRef, useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";

const CalendarDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <Button variant="ghost" onClick={onClick} ref={ref}>
      {value}
    </Button>
  ));
  CustomInput.displayName = "CustomInput";

  const TaskCardContainer = ({ className, children }) => {
    return (
      <Card>
        <CardBody>
          <CalendarContainer className={className}>
            {children}
          </CalendarContainer>
        </CardBody>
      </Card>
    );
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat={"MMMM d, yyyy"}
      // calendarContainer={TaskCardContainer}
      customInput={<CustomInput />}
    />
  );
};

export default CalendarDatePicker;
