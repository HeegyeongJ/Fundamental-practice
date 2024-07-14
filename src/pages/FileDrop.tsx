import {ChangeEvent, useCallback, useMemo, useRef, useState} from "react";
import {imageFileReaderP} from "../utils/imageFileReaderP.ts";

const FileDrop = () => {
    const [imageUrls, setImageUrls] = useState([]);
    const [error, setError] = useState<Error | null>(null);

    const inputRef = useRef<HTMLInputElement>(null);

    const makeImageUrls = useCallback((file:File[])=> {
        const promises = Array.from(file).map(file => imageFileReaderP(file));
        console.log(promises)
        Promise.all(promises)
            .then(urls => setImageUrls(prev => [...urls, ...prev])).catch(setError)
    },[])

    const onInputChange = useCallback((e : ChangeEvent<HTMLInputElement>) => {
        setError(null)
        const files = e.target.files;
        files && makeImageUrls(Array.from(files))
    }, [makeImageUrls])

    const onDivDrop = (e:DragEvent) => {
        e.preventDefault();
        setError(null)
        const files = e.dataTransfer?.files;
        files && makeImageUrls(Array.from(files))
    }

    const images = useMemo(() =>
        imageUrls.map((url,index) => <img key={index} src={url}></img>)
    ,[imageUrls])

    console.log(imageUrls)

    return (
        <section>
             <div>FileDrop</div>
            {error && <div>{error.message}</div>}
            <div onClick={() => inputRef.current?.click()}>
                <div onDragOver={(e) => e.preventDefault()} onDrop={(e) => onDivDrop(e)}>
                    <div>drop images or click me</div>
                </div>
                <input style={{display:"none"}} type={"file"} ref={inputRef} onChange={onInputChange} multiple/>
            </div>
            <div>{images}</div>
        </section>
    );
};

export default FileDrop;
