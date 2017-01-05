import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { searchCalendar } from '../actions/index';

const SearchCalendar = ({ handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fromDay">From Day</label>
        <Field name="from_day_of_month" label="From Day" component="input" type="number" />
      </div>
      <div>
        <label htmlFor="fromMonth">Month</label>
        <Field name="from_month" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="toDay">To Day</label>
        <Field name="to_day_of_month" label="From Day" component="input" type="number" />
      </div>
      <div>
        <label htmlFor="toMonth">Month</label>
        <Field name="to_month" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

SearchCalendar.propTypes = {
  handleSubmit: React.PropTypes.func,
};

const SearchCalendarForm = reduxForm({
  form: 'searchCalendar',
  onSubmit: searchCalendar,
})(SearchCalendar);

export default SearchCalendarForm;
