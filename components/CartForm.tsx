// TIPOS Y HOOKS
import { useContext, useRef, MutableRefObject, Dispatch, SetStateAction, useState } from "react";
import { useUserGet, defUserData } from "../utils/hooks";

// CONTEXTO
import appContext from "../utils/appContext";

// COMPONENTES
import Input from "../components/Input";

// PROPIEDADES
interface formProps { getUser?: Function; formValues?: IForms; updateValues: Function; strings: langPackage.cartPage["summary"]["forms"]["inputs"] }

const CartForm: React.FC<formProps> = (props: formProps) => {
  // ESTADOS
  const [userState, setUser]: [userModel, Dispatch<SetStateAction<userModel>>] = useState(defUserData);

  // CONTEXTO
  const { user } = useContext(appContext.appContext);

  // REFERENCIAS
  const defForm: IForms = { displayName: user?.displayName || "", email: user?.email || "", address: "", phone: 0, nit: "" };
  const form: MutableRefObject<IForms> = useRef(props.formValues || defForm);
  const refUser: MutableRefObject<userModel> = useRef(defUserData);

  // GUARDAR DATOS DE LOS INPUTS
  const saveToForm = (data: InputGetProps) => {
    // ASIGNAR VALORES AL FORM
    if (form.current) Object.keys(form.current).forEach((keys: string) => {
      // @ts-ignore
      if (form.current && keys === data.name) form.current[keys] = data.text;
      if (form.current && data.name === "nit" && data.text.length === 0) form.current.nit = "C/F";
    })
    props.updateValues(form.current);
  }

  // OBTENER INFORMACIÓN DEL USUARIO
  if (user && !props.formValues)
    useUserGet(user.uid)
      .then((newUser: userModel | null | undefined) => {
        // VERIFICAR NUEVOS DATOS
        if (newUser && JSON.stringify(newUser) !== JSON.stringify(refUser.current)) {
          // GUARDAR NUEVO NOMBRE Y CORREO
          saveToForm({ name: "displayName", text: newUser.displayName || "" })
          saveToForm({ name: "email", text: newUser.email || "" })

          // ACTUALIZAR DATOS
          if (props.getUser) props.getUser(newUser);
          setUser(newUser);
          refUser.current = newUser;
        }
      })

  return (
    <form id="deliveryForm">
      {
        !user && <>
          <Input
            type="text"
            label={props.strings.name.field}
            name="displayName"
            value={saveToForm}
            helper={props.strings.name.helper}
            icon="person"
            defValue={props.formValues?.displayName || userState.displayName || ""}
          />
          <Input
            type="email"
            label={props.strings.email.field}
            name="email"
            value={saveToForm}
            helper={props.strings.email.helper}
            icon="email"
            defValue={props.formValues?.email || userState.email || ""}
          />
        </>
      }
      <Input
        type="text"
        label={props.strings.address.field}
        name="address"
        value={saveToForm}
        helper={props.strings.address.helper}
        icon="directions"
        defValue={props.formValues?.address || userState.address}
      />
      <Input
        type="number"
        label={props.strings.phone.field}
        name="phone"
        value={saveToForm}
        helper={props.strings.phone.helper}
        icon="phone"
        defValue={props.formValues?.phone || userState.phone}
        maxLength={8}
      />
      <Input
        type="text"
        label={props.strings.nit.field}
        name="nit"
        value={saveToForm}
        helper={props.strings.nit.helper}
        icon="fiber_pin"
        defValue={props.formValues?.nit || userState.nit}
      />
      <style jsx>{`
        #deliveryForm{
          margin-bottom:20px;
          height:0;
        }
      `}</style>
    </form>
  )
}

export default CartForm;