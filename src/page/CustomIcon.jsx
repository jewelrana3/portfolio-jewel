

const CustomIcon = () => {
    const svgMarkup = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="service_list_icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>`;
    return (
        <div dangerouslySetInnerHTML={{ __html: svgMarkup }} />
      );
};

export default CustomIcon;