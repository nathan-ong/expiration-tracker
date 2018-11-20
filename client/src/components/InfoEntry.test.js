import React from 'react';
import ReactDOM from 'react-dom';
import InfoEntry from './InfoEntry';

test('should render 31 days to day dropdown', () => {
  const container = document.createElement('div');
  ReactDOM.render(<InfoEntry />, container);
  for (var i = 1; i <= 31; i++) {
    expect(container.textContent).toMatch(String(i));
  }
});

test('should render month names to month dropdown', () => {
  const container = document.createElement('div');
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  ReactDOM.render(<InfoEntry />, container);
  for (var i = 0; i < months.length; i++) {
    expect(container.textContent).toMatch(months[i]);
  }
});

test('should render years to year dropdown', () => {
  const container = document.createElement('div');
  const years = [18, 19, 20, 21];
  ReactDOM.render(<InfoEntry />, container);
  for (var i = 0; i < years.length; i++) {
    expect(container.textContent).toMatch(String(years[i]));
  }
})
