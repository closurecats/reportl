import React from 'react';
import { connect } from 'react-redux';
import Reactable from 'reactable';

const Table = Reactable.Table;


const RenderUserTable = ({ gradeData }) => {
  const tableData = [];

  gradeData.forEach((tableItem) => {
    tableData.push({
      Name: tableItem.users.fullName,
      Grade: tableItem.grade,
      Module: tableItem.module.name,
      Assignment: tableItem.gradeableobjects.objectName,
      Class: tableItem.classes.name,
      Department: tableItem.departments.name,

    });
  });

  return (
    <Table
      className="table"
      data={tableData}
      itemsPerPage={50}
      pageButtonLimit={10}
      sortable={[{ column: 'Grade',
        sort: function sortFunction(a, b) {
          return a > b ? 1 : -1;
        } }]}

    />
  );
};

RenderUserTable.propTypes = {
  gradeData: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
  return {
    gradeData: state.gradeData,
    selectedClassGraph: state.selectedClassGraph,
    selectedUserGraph: state.selectedUserGraph,
  };
}

export default connect(mapStateToProps)(RenderUserTable);
