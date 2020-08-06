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
    getAllUsers,
    ChangeRoletoUser,
    ChangeRoletoDSNauki,
    ChangeRoletoDSKsztalcenia,
    ChangeRoletoDSStudenckich,
    ChangeRoletoDSOgolnych
  } from "../../actions/allusersActions";
  import PropTypes from "prop-types";
  import AddCircleIcon from '@material-ui/icons/AddCircle';
  import { green, purple } from '@material-ui/core/colors';
  import AccessibilityRoundedIcon from '@material-ui/icons/AccessibilityRounded';

class AllUsers extends Component {
      static propTypes = {
        allusers: PropTypes.object.isRequired
      };

      componentDidMount() {
        this.props.getAllUsers();
      };

        onUserRole = id => {
            this.props.ChangeRoletoUser(id);
            window.location.reload(false)
        };

        onDSNauki = id => {
          this.props.ChangeRoletoDSNauki(id);
          window.location.reload(false)
        };

        onDSKsztalcenia = id => {
          this.props.ChangeRoletoDSKsztalcenia(id);
          window.location.reload(false)
        }; 
        onDSStudenckich = id => {
            this.props.ChangeRoletoDSStudenckich(id);
            window.location.reload(false)
          }; 
        onDSOgolnych = id => {
          this.props.ChangeRoletoDSOgolnych(id);
          window.location.reload(false)
        }; 
  render() {
    const {allusers} = this.props.allusers;
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
      title="Nadawanie odpowiednich roli dla użytkowników (Prodziekani)"
      columns={[
        { 
            title: 'Imię', 
            field: 'imie' 
        },
        { 
            title: 'Nazwisko', 
            field: 'nazwisko' 
        },
        {
            title: 'E-mail',
            field: 'email'
        },
        {
          title: 'Rola',
          field: 'rola'
        }
      ]}
      data={allusers}
      actions={[
        {
          icon: () => <AccessibilityRoundedIcon />,
          tooltip: 'Zmień na Użytkownika',
          onClick: (event, rowData) => this.onUserRole(rowData._id),
        },
        {
        icon: () => <AddCircleIcon color='primary' />,
          tooltip: 'Zmień na Prodziekan ds. Nauki',
          onClick: (event, rowData) => this.onDSNauki(rowData._id),
        }, 
        {
          icon: () => <AddCircleIcon color='secondary' />,
            tooltip: 'Zmień na Prodziekan ds. Kształcenia',
            onClick: (event, rowData) => this.onDSKsztalcenia(rowData._id),
        },
        {
          icon: () => <AddCircleIcon style={{ color: green[500] }} />,
            tooltip: 'Zmień na Prodziekan ds. Studenckich',
            onClick: (event, rowData) => this.onDSStudenckich(rowData._id),
        },
        {
          icon: () => <AddCircleIcon style={{ color: purple[500] }} />,
            tooltip: 'Zmień na Prodziekan ds. Ogólnych',
            onClick: (event, rowData) => this.onDSOgolnych(rowData._id),
        },
      ]}
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
            actions: 'Zmień Role'
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
    allusers: state.allusers
  });


  export default connect(mapStatetoProps, { getAllUsers, ChangeRoletoUser, ChangeRoletoDSNauki, ChangeRoletoDSKsztalcenia, ChangeRoletoDSStudenckich, ChangeRoletoDSOgolnych })(
    AllUsers
  );