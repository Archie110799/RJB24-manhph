export const getSuppliersAsync = () => {
  return (dispatch) => {
    dispatch(getSuppliers_Pending());

    fetch(
      "https://62ce2903066bd2b699309018.mockapi.io/api/v1/suppliers/?page=4&limit=15"
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(getSuppliers_Success(data));
      })
      .catch((error) => {
        dispatch(getSuppliers_Error(error));
      });
  };
};

// CÁC DISPATCH báo trạng thái của ASYNC

//action -> action.type, action.payload
const getSuppliers_Success = (data) => ({
  type: "GET_SUCCESS", // ACTION TYPE
  payload: data, // PARAMETER
});

const getSuppliers_Pending = () => ({
  type: "GET_PENDING", // ACTION TYPE
});

//action -> action.type, action.error
const getSuppliers_Error = (error) => ({
  type: "GET_ERROR", // ACTION TYPE
  error: error, // PARAMETER
});

export const deleteSupplierAsync = (id) => {
  return (dispatch) => {
    dispatch(deleteSupplier_Pending());
    fetch(
      "https://62ce2903066bd2b699309018.mockapi.io/api/v1/suppliers/" + id,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(deleteSupplier_Success(data?.id));
      })
      .catch((error) => {
        dispatch(deleteSupplier_Error(error));
      });
  };
};
// CÁC DISPATCH báo trạng thái của ASYNC
// Action Creator
const deleteSupplier_Success = (id) => ({
  type: "DELETE_SUCCESS", // ACTION TYPE
  id: id, // PARAMETER
});

// Action Creator
const deleteSupplier_Pending = () => ({
  type: "DELETE_PENDING", // ACTION TYPE
});

// Action Creator
const deleteSupplier_Error = (error) => ({
  type: "DELETE_ERROR", // ACTION TYPE
  error: error, // PARAMETER
});
