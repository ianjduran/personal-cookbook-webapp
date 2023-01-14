import React, { useState, useEffect, SyntheticEvent } from "react";
import { ToastContainer, toast } from "react-toastify";

import { FiSave } from "react-icons/fi";

import IconPicker from "./IconPickerPopover";
import ColorPicker from "./ColorPicker";
import icons from "../lib/Icons";
import { useRouter } from "next/router";

// TODO: setClosed Any -> Function
export default function CategoryForm({ setClosed }: any, { ...props }) {
  const router = useRouter();

  const [categoryName, setCategoryName] = useState(" ");
  const [selectedIcon, setSelectedIcon] = useState(Object.keys(icons)[0]);
  const [colorIcon, setColorIcon] = useState("");
  const ChosenIcon = icons[selectedIcon];
  const [uploadState, setUploadState] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (!selectedIcon) {
      alert("Por favor llena los campos");
    } else {
      setIsSaving(true);
      setUploadState("Guardando Cambios... Por favor espere");
      const res = await fetch("/api/categories/create", {
        body: JSON.stringify({
          categoryName: categoryName,
          iconPath: selectedIcon,
        }),
        method: "POST",
      });
      const result = await res.json();
      console.log(result);
      // TODO: Manage State Save
      setUploadState("Se creó la categoría ✔");
      setCategoryName("");
      setSelectedIcon("");
      setIsSaving(false);

      toast("Categoria Añadida con éxito");

      router.reload();
    }
  };

  return (
    <div>
      <ToastContainer />
      <h3 className="mb-2 text-lg font-medium font-subtitle">
        Crear Categoria
      </h3>
      <div className="flex flex-wrap gap-8 md:flex-nowrap">
        <form onSubmit={handleSubmit} {...props} className="">
          <div className="mb-4">
            <label className="block text-lg font-bold  font-subtitle">
              Nombre
            </label>
            <input
              required
              className="px-2 py-1 border rounded-md shadow-md dark:text-slate-800 font-subtitle caret-blue-500 focus:outline-blue-500 focus:border-blue-500"
              type="text"
              placeholder="Ejemplo: Pasteleria"
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>

          {/* setIcon de hijo a padre */}
          {/* <IconPicker onChange={setIcon}/> || selected -> icono as html tag */}
          <div>
            <label className="block text-lg font-bold  font-subtitle">
              Icono
            </label>
            {/* <IconPicker onChange={setSelectedIcon} /> */}
            <IconPicker onChange={setSelectedIcon} />
          </div>

          {/* setIcon hacia otro componente */}
          <div>
            <label className="block text-lg font-bold  font-subtitle">
              Color
            </label>
            <ColorPicker onChange={setColorIcon} />
          </div>
          <button
            disabled={isSaving}
            className="px-2 py-1 my-2 bg-gray-50 rounded-md hover:brightness-95 dark:hover:brightness-105 dark:bg-gray-800 text-green-500 disabled:text-gray-500"
          >
            <div className="flex-inline flex align-middle justify-center items-center">
              <FiSave className="inline-block mr-2" />
              <span className="inline-block">Guardar</span>
            </div>
          </button>
          {uploadState && (
            <p className="text-blue-500 font-subtitle">{uploadState}</p>
          )}
        </form>

        <div>
          <h1 className="text-md tracking-wide font-medium">
            Previsualización
          </h1>
          {/* Oculto hasta que se selecciona uno */}
          {/* {selectedIcon && <Obj className={`h-16 w-16 mb-4`} style={colorIcon}/>} */}
          <ChosenIcon className={`h-16 w-16`} color={colorIcon ?? "black"} />
          <p> {categoryName} </p>
        </div>
      </div>
    </div>
  );
}
