import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PsychotherapistList } from "./psychotherapist/PsychotherapistList";
import { PsychotherapistCreate } from "./psychotherapist/PsychotherapistCreate";
import { PsychotherapistEdit } from "./psychotherapist/PsychotherapistEdit";
import { PsychotherapistShow } from "./psychotherapist/PsychotherapistShow";
import { CheckoutPaymentList } from "./checkoutPayment/CheckoutPaymentList";
import { CheckoutPaymentCreate } from "./checkoutPayment/CheckoutPaymentCreate";
import { CheckoutPaymentEdit } from "./checkoutPayment/CheckoutPaymentEdit";
import { CheckoutPaymentShow } from "./checkoutPayment/CheckoutPaymentShow";
import { PsychoScheduleList } from "./psychoSchedule/PsychoScheduleList";
import { PsychoScheduleCreate } from "./psychoSchedule/PsychoScheduleCreate";
import { PsychoScheduleEdit } from "./psychoSchedule/PsychoScheduleEdit";
import { PsychoScheduleShow } from "./psychoSchedule/PsychoScheduleShow";
import { SessionList } from "./session/SessionList";
import { SessionCreate } from "./session/SessionCreate";
import { SessionEdit } from "./session/SessionEdit";
import { SessionShow } from "./session/SessionShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { TaxList } from "./tax/TaxList";
import { TaxCreate } from "./tax/TaxCreate";
import { TaxEdit } from "./tax/TaxEdit";
import { TaxShow } from "./tax/TaxShow";
import { WaitingListList } from "./waitingList/WaitingListList";
import { WaitingListCreate } from "./waitingList/WaitingListCreate";
import { WaitingListEdit } from "./waitingList/WaitingListEdit";
import { WaitingListShow } from "./waitingList/WaitingListShow";
import { PatientList } from "./patient/PatientList";
import { PatientCreate } from "./patient/PatientCreate";
import { PatientEdit } from "./patient/PatientEdit";
import { PatientShow } from "./patient/PatientShow";
import { PatientTraitList } from "./patientTrait/PatientTraitList";
import { PatientTraitCreate } from "./patientTrait/PatientTraitCreate";
import { PatientTraitEdit } from "./patientTrait/PatientTraitEdit";
import { PatientTraitShow } from "./patientTrait/PatientTraitShow";
import { PatientGroupList } from "./patientGroup/PatientGroupList";
import { PatientGroupCreate } from "./patientGroup/PatientGroupCreate";
import { PatientGroupEdit } from "./patientGroup/PatientGroupEdit";
import { PatientGroupShow } from "./patientGroup/PatientGroupShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { QuestionaireList } from "./questionaire/QuestionaireList";
import { QuestionaireCreate } from "./questionaire/QuestionaireCreate";
import { QuestionaireEdit } from "./questionaire/QuestionaireEdit";
import { QuestionaireShow } from "./questionaire/QuestionaireShow";
import { QuestionarieInterpretationList } from "./questionarieInterpretation/QuestionarieInterpretationList";
import { QuestionarieInterpretationCreate } from "./questionarieInterpretation/QuestionarieInterpretationCreate";
import { QuestionarieInterpretationEdit } from "./questionarieInterpretation/QuestionarieInterpretationEdit";
import { QuestionarieInterpretationShow } from "./questionarieInterpretation/QuestionarieInterpretationShow";
import { TestList } from "./test/TestList";
import { TestCreate } from "./test/TestCreate";
import { TestEdit } from "./test/TestEdit";
import { TestShow } from "./test/TestShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"back end service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Psychotherapist"
          list={PsychotherapistList}
          edit={PsychotherapistEdit}
          create={PsychotherapistCreate}
          show={PsychotherapistShow}
        />
        <Resource
          name="CheckoutPayment"
          list={CheckoutPaymentList}
          edit={CheckoutPaymentEdit}
          create={CheckoutPaymentCreate}
          show={CheckoutPaymentShow}
        />
        <Resource
          name="PsychoSchedule"
          list={PsychoScheduleList}
          edit={PsychoScheduleEdit}
          create={PsychoScheduleCreate}
          show={PsychoScheduleShow}
        />
        <Resource
          name="Session"
          list={SessionList}
          edit={SessionEdit}
          create={SessionCreate}
          show={SessionShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="Tax"
          list={TaxList}
          edit={TaxEdit}
          create={TaxCreate}
          show={TaxShow}
        />
        <Resource
          name="WaitingList"
          list={WaitingListList}
          edit={WaitingListEdit}
          create={WaitingListCreate}
          show={WaitingListShow}
        />
        <Resource
          name="Patient"
          list={PatientList}
          edit={PatientEdit}
          create={PatientCreate}
          show={PatientShow}
        />
        <Resource
          name="PatientTrait"
          list={PatientTraitList}
          edit={PatientTraitEdit}
          create={PatientTraitCreate}
          show={PatientTraitShow}
        />
        <Resource
          name="PatientGroup"
          list={PatientGroupList}
          edit={PatientGroupEdit}
          create={PatientGroupCreate}
          show={PatientGroupShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="Questionaire"
          list={QuestionaireList}
          edit={QuestionaireEdit}
          create={QuestionaireCreate}
          show={QuestionaireShow}
        />
        <Resource
          name="QuestionarieInterpretation"
          list={QuestionarieInterpretationList}
          edit={QuestionarieInterpretationEdit}
          create={QuestionarieInterpretationCreate}
          show={QuestionarieInterpretationShow}
        />
        <Resource
          name="Test"
          list={TestList}
          edit={TestEdit}
          create={TestCreate}
          show={TestShow}
        />
      </Admin>
    </div>
  );
};

export default App;
