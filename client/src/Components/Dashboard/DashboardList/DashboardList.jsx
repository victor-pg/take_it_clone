import React, { useState, useEffect } from "react";
import axios from "axios";
import DashboardItem from "../DashboardItem/DashboardItem";
import ModalWindow from "../../ModalWindow/ModalWindow";
import { Row, Container } from "react-bootstrap";
import {FormattedMessage} from 'react-intl';

import "./DashboardList.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';

const DashboardList = () => {
  const [data, setData] = useState([]);
  const [productTypes, setProductTypes] = useState([]);

  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const [currentId, setCurrentId] = useState(0);
  const [name, setName] = useState("");
  const [nameRu, setNameRu] = useState("");
  const [short_desc, setShortDesc] = useState("");
  const [short_desc_ru, setShortDescRu] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionRu, setDescriptionRu] = useState("");
  const [type, setType] = useState("");
  const [newImage, setNewImage] = useState("");

  useEffect(() => {
    if(JSON.parse(localStorage.getItem('language'))==='ro'){
      axios
      .get("/api/products")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error.message));
    }else if(JSON.parse(localStorage.getItem('language'))==='ru'){
      axios
      .get("/api/products/ru")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error.message));
    }
    getCurrentProduct(currentId);
    getProductTypes();
  }, [currentId]);

  const changeModalState = (id) => {
    setShowUpdateModal(!showUpdateModal);
    setCurrentId(id);
  };

  const customStyles = {
    content: {
      height: "550px",
      padding: '40px 0 0 0'
    },
  };

  const getCurrentProduct = async (id) => {
      await axios
      .get(`/api/details/${id}`)
      .then((res) => {
        const { name, short_desc, description, type } = res.data[0];
        setName(name);
        setShortDesc(short_desc);
        setDescription(description);
        setType(type);
        console.log('short_desc : ');
        console.log(res.data[0]);
      })
      .catch((error) => console.log(error.message));
    
      await axios
      .get(`/api/details/ru/${id}`)
      .then((res) => {
        const { name, short_desc, description, type } = res.data[0];
        setNameRu(name);
        setShortDescRu(short_desc);
        setDescriptionRu(description);
        setType(type);
        console.log('short_desc_ru : ');
        console.log(res.data[0]);
      })
      .catch((error) => console.log(error.message));
    

    // await axios
    //   .get(`/api/details/${id}`)
    //   .then((res) => {
    //     const { name, short_desc, description, type } = res.data[0];
    //     setName(name);
    //     setShortDesc(short_desc);
    //     setDescription(description);
    //     setType(type);
    //   })
    //   .catch((err) => console.log(""));
  };

  const getProductTypes = async () => {
    await axios
      .get("/api/products/types")
      .then((res) => setProductTypes(res.data))
      .catch((err) => console.log("Error while getting product types " + err));
  };

  const updateProductContent = () => {
    return (
      <form className="news-modal-html-content" onSubmit={saveUpdate}>
        <div className="modal-input-group">
          <label htmlFor="name">Nume</label>
          <input
            type="text"
            name="name"
            key="super-secret-key"
            defaultValue={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="modal-input-group">
          <label htmlFor="name">Имя</label>
          <input
            type="text"
            name="nameRu"
            key="super-secret-key"
            defaultValue={nameRu}
            onChange={(e) => {
              setNameRu(e.target.value);
            }}
          />
        </div>
        <div className="modal-input-group">
          <label htmlFor="short_desc">Scurtă descriere</label>
          <input
            type="text"
            name="short_desc"
            defaultValue={short_desc}
            onChange={(e) => setShortDesc(e.target.value)}
          />
        </div>
        <div className="modal-input-group">
          <label htmlFor="short_desc">Краткое описание</label>
          <input
            type="text"
            name="short_desc_ru"
            defaultValue={short_desc_ru}
            onChange={(e) => setShortDescRu(e.target.value)}
          />
        </div>
        <div className="modal-input-group">
          <label htmlFor="description">Descriere</label>
          <textarea
            name="description"
            cols="30"
            rows="10"
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="modal-input-group">
          <label htmlFor="description">Описание</label>
          <textarea
            name="descriptionRu"
            cols="30"
            rows="10"
            defaultValue={descriptionRu}
            onChange={(e) => setDescriptionRu(e.target.value)}
          ></textarea>
        </div>
        <div className="modal-input-group">
          <label htmlFor="type">Tip produs/Тип</label>
          <select
            name="type"
            defautlValue={type}
            onChange={(e) => setType(e.target.value)}
          >
            {productTypes.map(({type})=>{
              return <option value={type} >{type}</option>
            })}
          </select>
        </div>
        <div className="modal-input-group">
          <label htmlFor="file">Imaginea/Картинка</label>
          <input
            type="file"
            name="file"
            onChange={(e) => setNewImage(e.target.files[0])}
          />
        </div>
        <input
          type="submit"
          value="Modifică/Изменить"
          className="btn btn-primary d-block m-auto"
          onClick={saveUpdate}
        />
      </form>
    );
  };

  const saveUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", newImage);

    // my

    formData.append("name", name);
    formData.append("nameRu", nameRu);
    formData.append("short_desc", short_desc);
    formData.append("short_desc_ru", short_desc_ru);
    formData.append("description", description);
    formData.append("descriptionRu", descriptionRu);
    formData.append("type", type);

    console.log(`Name : ${name}, SDesc : ${short_desc}, Desc : ${description}`);
    // end my

    try {
      await axios
        .put(`/api/products/update/${currentId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((result) => {
          alert(result.data.message);
          setShowUpdateModal(false);
        });
    } catch (err) {
      alert("A aparut o problemă");
    }
  };

  const deleteProduct = async (id) => {
    await axios
      .delete(`/api/products/delete/${id}`)
      .then((res) => {
        alert(res.data.message);
        setData((data) => data.filter((product) => product.id !== id));
      })
      .catch((err) => alert(err.data.message));
  };

  return (
    <div id="dashboard-catalog">
      <h1 className="m-4 text-center"><FormattedMessage id="catalog"/></h1>

      {productTypes.map(({ type }) => {
        return (
          <>
            <h1 id={`dashboard-${type}`} className="m-4 text-center text-​uppercase">
              {type}
            </h1>

            <Container>
              <Row>
                  {
                      data.filter((item)=>item.type===type)
                          .map((filteredItem)=> <DashboardItem item={filteredItem} key={filteredItem.id} deleteProduct={() => deleteProduct(filteredItem.id)} updateProduct={() => changeModalState(filteredItem.id)} /> )
                  }
              </Row>
            </Container>
          </>
        );
      })}
      {showUpdateModal ? (
        <ModalWindow
          message="Modifica produsul"
          customStyles={customStyles}
          htmlContent={updateProductContent}
        />
      ) : null}
    </div>
  );
};

export default DashboardList;
