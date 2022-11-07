import React from "react";

const Write = () => {
  return (
    <>
      <div class="form-group">
        <label>제목</label>
        <input
          type="text"
          class="form-control"
          placeholder="제목"
          id="title"
          required
        />
      </div>
      <div class="form-group">
        <label>작성자</label>
        <input type="text" class="form-control" id="writer" readonly />
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">글 내용</label>
        <textarea
          class="form-control"
          rows="5"
          id="main-content"
          required
        ></textarea>
      </div>
      <input
        id="fileInput"
        type="file"
        multiple
        accept="image/jpeg, image/jpg, image/png"
        onchage="checkSize(this)"
      />
      <button type="button" class="btn btn-primary" id="write">
        글작성
      </button>
    </>
  );
};
export default Write;
