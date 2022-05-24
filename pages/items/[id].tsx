import type { NextPage } from 'next';
import Layout from '../../components/layout';

const ItemDetail: NextPage = () => {
    return (
        <Layout canGoBack>
            <div className="px-4 py-10">
                <div className="mb-8">
                    <div className="h-96 bg-slate-300" />
                    <div className="flex cursor-pointer py-3 border-t border-b items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-slate-300" />
                        <div>
                            <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
                            <p className="text-xs font-medium text-gray-500">View profile &rarr;</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Similar items</h2>
                        <div className=" mt-6 grid grid-cols-2 gap-4">
                            {[1, 2, 3, 4, 5, 6].map((_, i) => (
                                <div key={i}>
                                    <div className="h-56 w-full mb-4 bg-slate-300" />
                                    <h3 className="text-gray-700 -mb-1">Galaxy S60</h3>
                                    <span className="text-sm font-medium text-gray-900">$6</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ItemDetail;
