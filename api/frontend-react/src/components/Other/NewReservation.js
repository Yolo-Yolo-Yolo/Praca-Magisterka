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
    getMyReservationHours,
    updateReservationHours
  } from "../../actions/reservationhoursActions";
  import {
    addReservation
  } from "../../actions/reservationActions";
import PropTypes from "prop-types";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { green } from '@material-ui/core/colors';
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import Button from '@material-ui/core/Button';


class NewReservation extends Component {
  state = {
    modal: false,
    email: "",
    album: 1,
    imie: "",
    nazwisko:"",
    telefon: 1,
    date: "",
    do_kogo: "",
    temat: "",
    opis: "",
    potwierdzona:false,
    id_terminu:"",
    id_przyjec:"",
  };

  static propTypes = {
    reservationhours: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  };
      
      toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      };
      componentDidMount() {
        const { user } = this.props.auth;
        const {reservationhours} = this.props.reservationhours;
        this.setState({
          email: user.email,
          album: user.album,
          imie: user.imie,
          nazwisko: user.nazwisko,
          telefon: user.telefon,
          do_kogo: this.props.who,
          });
        this.props.getMyReservationHours(this.props.who);
      };
      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };  
        onBookClick = rowData => {
          this.setState({
            id_terminu: rowData.id,
            date: rowData.hour,
            id_przyjec: rowData.Code,
            });
            console.log(rowData.Code)
          this.toggle();
        };

        onSubmit = e => {
          e.preventDefault();

          const user = {
            email: this.state.email,
            album: this.state.album,
            imie: this.state.imie,
            nazwisko: this.state.nazwisko,
            telefon: this.state.telefon,
          };
      
          const newReservation = {
            id_terminu: this.state.id_terminu,
            do_kogo: this.state.do_kogo,
            temat: this.state.temat,
            opis: this.state.opis,
            potwierdzona: this.state.potwierdzona,
            date: this.state.date,
            user: user,
          };
      
          //Add Reservation via addReservation action
          this.props.addReservation(newReservation);
          this.props.updateReservationHours(this.state.id_przyjec,this.state.id_terminu);
          // Close Modal
          this.toggle();
        };
 
  render() {
    const {reservationhours} = this.props.reservationhours;
    //const godziny3 = Object.assign(...reservationhours.map(d => ({[d[0]]: d[1]})));
    const hours = reservationhours.flatMap(({ godziny }) => godziny)
    const test = reservationhours.map(({_id}) => _id)
    console.log(test);
    

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
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
          <ModalHeader toggle={this.toggle} style={{color : "white", backgroundColor : "#3f51b5"}}>Nowa Rezerwacja - {this.state.date}</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Temat:</Label>
                <Input
                  type="text"
                  name="temat"
                  placeholder="Dodaj tytuł"
                  onChange={this.onChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="item">Opis:</Label>
                <Input
                  type="textarea"
                  name="opis"
                  placeholder="Krótki opis powodu wizyty"
                  onChange={this.onChange}
                ></Input>
                <Button color="primary" onClick={this.onSubmit} variant="contained" style={{ marginTop: "2rem" }}>
                  Dodaj Rezerwacje
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
        icons={tableIcons}
      title="Najbliższe terminy dostępnych wizyt"
      columns={[ 
        { 
            title: 'Data Wizyty', 
            field: 'hour' 
        },
        { 
            title: 'Zajęta', 
            field: 'isBooked',
            type: 'boolean' 
        }
      ]}
      data={hours}
      actions={[
        {
          icon: () => <AddCircleIcon style={{ color: green[500] }} />,
          tooltip: 'Zarezerwuj termin',
          onClick: (event, rowData) => this.onBookClick(rowData),
        }
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
      </div>
    )
  }
}

const mapStatetoProps = state => ({
    auth: state.auth,
    reservationhours: state.reservationhours
  });


  export default connect(mapStatetoProps, { getMyReservationHours, updateReservationHours, addReservation })(
    NewReservation
  );