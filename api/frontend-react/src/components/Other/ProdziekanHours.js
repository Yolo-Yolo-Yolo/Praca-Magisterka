import React, { Component } from 'react'
import MaterialTable from 'material-table'
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { connect } from "react-redux";
import {
    deleteReservationHours,
    getMyReservationHours
  } from "../../actions/reservationhoursActions";
  import PropTypes from "prop-types";
import ProdziekanReservationInfo from './ProdziekanReservationInfo';

class ProdziekanHours extends Component {

  static propTypes = {
        reservationhours: PropTypes.object.isRequired,
        auth: PropTypes.object.isRequired
      };

      componentDidMount() {
        const { user } = this.props.auth;
        this.props.getMyReservationHours(user.rola);
      };

        onDeleteClick = id => {
            this.props.deleteReservationHours(id);
        };
 
  render() {
    const {reservationhours} = this.props.reservationhours;
    //const godziny3 = Object.assign(...reservationhours.map(d => ({[d[0]]: d[1]})));
    const hours = reservationhours.flatMap(({ godziny }) => godziny)
    console.log(hours);
    const hours2 = hours.filter(hours => (new Date(hours.hourUS)) > (new Date() - 24*60*60000));
    console.log(hours2);
    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
      };
    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
        icons={tableIcons}
      title="Moje godziny przyjęć studentów"
      detailPanel={rowData => {
        return (
          <div>
              <ProdziekanReservationInfo reservation={rowData.id} />
          </div>
        )
      }}
      columns={[ 
        { 
            title: 'Data Wizyty', 
            field: 'hour' 
        },
        { 
            title: 'Zajęta', 
            field: 'isBooked',
            type: 'boolean' 
        },
        {
            title: 'Potwierdzona',
            field: 'isConfirmed',
            type: 'boolean'
        },
      ]}
      data={hours2}
      options={{
        actionsColumnIndex: -1
      }}
      localization={{
        body: {
            emptyDataSourceMessage: 'Brak danych do wyświetlenia',
            addTooltip: "Dodaj",
            deleteTooltip: "Usuń",
            editTooltip: "Edytuj",
            filterRow: {
              filterTooltip: 'Filtruj'
            },
            editRow: {
              deleteText: "Czy na pewno chcesz usunąć ten rząd?",
              cancelTooltip: "Anuluj",
              saveTooltip: "Zatwierdź"
            },
          },
          grouping: {
            placeholder: "Przeciągaj nagłówki..",
          },
          header: {
            actions: 'Akcje'
          },
          pagination: {
            labelDisplayedRows: 'od {from} do {to} z {count} ogółem',
            labelRowsSelect: "wierszy",
            labelRowsPerPage: "Wierszy na stronie:",
            firstAriaLabel: "Pierwsza strona",
            firstTooltip: "Pierwsza strona",
            previousAriaLabel: "Poprzednia strona",
            previousTooltip: "Poprzednia strona",
            nextAriaLabel: "Następna strona",
            nextTooltip: "Następna strona",
            lastAriaLabel: "Ostatnia strona",
            lastTooltip: "Ostatnia strona",
          },
          toolbar: {
            addRemoveColumns: "Dodaj lub usuń kolumny",
            nRowsSelected: '{0} rzędów zaznaczonych',
            showColumnsTitle: "Pokaż tytuły kolumn",
            showColumnsAriaLabel: "Pokaż tytuły kolumn",
            exportTitle: "Export",
            exportAriaLabel: "Export",
            exportName: "Export do .CSV",
            searchTooltip: "Szukaj",
            searchPlaceholder: "Szukaj"
          }
          
    }}
    />
      </div>
    )
  }
}

const mapStatetoProps = state => ({
    auth: state.auth,
    reservationhours: state.reservationhours
  });


  export default connect(mapStatetoProps, { getMyReservationHours, deleteReservationHours })(
    ProdziekanHours
  );