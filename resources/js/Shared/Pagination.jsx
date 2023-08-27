import React from 'react';
import { Link } from '@inertiajs/inertia-react';
  
export default function Pagination({ links }) {
  
    function getClassName(active) {
        if(active) {
            return "mr-1 mb-1 px-2 py-1 fs-6 text-sm leading-4 border rounded hover:bg-info focus:border-info focus:text-danger bg-info text-black";
        } else{
            return "mr-1 mb-1 px-2 py-1 fs-6 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary";
        }
    }
    const renderHTML = (rawHTML) => React.createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });
 
     
    return (
        links.length > 3 && (
            <div className="mb-4">
                <div className="flex flex-wrap mt-8">
                    {links.map((link, key) => (
                            link.url === null ?
                                    (<span key={link.label}
                                            className="mr-1 mb-1 px-2 py-1 text-sm leading-4 text-gray-400 border rounded"
                                        >{renderHTML(link.label)}</span>) :
  
                                    (<Link key={link.label}
                                                className={getClassName(link.active)}
                                                href={ link.url }
                                            >{renderHTML(link.label)}</Link>)
                                    ))}
                </div>
            </div>
        )
    );
}