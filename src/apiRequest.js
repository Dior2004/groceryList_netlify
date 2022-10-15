const apiRequest = async (url = "", optionsObj = null, errMessage = null) => {
  try {
    const responces = await fetch(url, optionsObj); // CRUD is held in optionsObj
    if (!responces.ok) throw Error("Please reload the page");
  } catch (error) {
    errMessage = error.message;
  } finally {
    return errMessage;
  }
};

export default apiRequest;
