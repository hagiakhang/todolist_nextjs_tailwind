"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import { useState } from "react"
import axios from 'axios';
import { supabase } from '@/lib/supabaseClient'



export default function Component() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

   //Gọi hàm đăng nhập thông qua tài khoản gmail

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Vui lòng nhập đầy đủ email và mật khẩu.")
      return
    }
    
      try {
            const res = await axios.post('api/dangnhap', { email, password })
            if (res && res.data?.message) {
              alert(res.data.message)
              //
            }
          } catch (err: any) {
            const errorMsg = err.response?.data?.error || "Lỗi không xác định"
            
            if (errorMsg.toLowerCase().includes("invalid")) {
              alert("Sai email hoặc mật khẩu")
            } else {
              alert(errorMsg)
            }
          } 
  }

  //Gọi hàm đăng nhập thông qua google

  const handleLoginWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })

    if (error) alert("Đăng nhập thất bại!")
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="space-y-4 pb-8">
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <div className="text-center space-y-2">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Chào mừng trở lại
              </CardTitle>
              <CardDescription className="text-gray-500">Đăng nhập vào tài khoản của bạn</CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200"
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Mật khẩu
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={password ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200"
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {password ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" className="border-gray-300" />
                <Label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                  Ghi nhớ đăng nhập
                </Label>
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors">
                Quên mật khẩu?
              </button>
            </div>

            <Button onClick={handleLogin} className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]">
              Đăng nhập
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Hoặc</span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full h-12 border-gray-200 hover:bg-gray-50 transition-all duration-200"
              onClick={handleLoginWithGoogle}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Đăng nhập với Google
            </Button>

            <p className="text-center text-sm text-gray-600">
              Chưa có tài khoản?{" "}
              <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">Đăng ký ngay</button>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
