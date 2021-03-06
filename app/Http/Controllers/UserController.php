<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Auth;

class UserController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $user = auth()->user();
        $this->authorize('viewAny', $user);  // Policy をチェック
        $users = \App\Models\User::get(); // 社員一覧を取得
        return view('users.index', compact('users')); // users.index.bldae を呼出し、 usersを渡す
    }

    public function loginuser()
    {
        $loginuser = Auth::user();
        return $loginuser;
    }
}
